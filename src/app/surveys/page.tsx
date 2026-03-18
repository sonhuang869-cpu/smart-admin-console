'use client';

import { useState } from 'react';
import AdminLayout from '@/components/layout/AdminLayout';
import Badge from '@/components/ui/Badge';
import Modal from '@/components/ui/Modal';
import BarChart from '@/components/charts/BarChart';
import { PlusIcon, EyeIcon, EditIcon, TrashIcon, CalendarIcon } from '@/components/icons';
import { surveys, Survey } from '@/data/mockData';

export default function SurveysPage() {
  const [selectedSurvey, setSelectedSurvey] = useState<Survey | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const surveyStats = {
    total: surveys.length,
    active: surveys.filter((s) => s.status === 'active').length,
    completed: surveys.filter((s) => s.status === 'completed').length,
    totalResponses: surveys.reduce((sum, s) => sum + s.responses, 0),
  };

  const chartData = surveys.map((s) => ({
    label: s.title.split(' ')[0],
    value: s.responses,
  }));

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-800">Survey Management</h1>
            <p className="text-slate-500">Create and manage your surveys</p>
          </div>
          <button className="btn-gradient flex items-center gap-2">
            <PlusIcon className="w-5 h-5" />
            Create Survey
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="card">
            <p className="text-sm text-slate-500">Total Surveys</p>
            <p className="text-2xl font-bold text-slate-800">{surveyStats.total}</p>
          </div>
          <div className="card">
            <p className="text-sm text-slate-500">Active</p>
            <p className="text-2xl font-bold text-green-600">{surveyStats.active}</p>
          </div>
          <div className="card">
            <p className="text-sm text-slate-500">Completed</p>
            <p className="text-2xl font-bold text-primary-600">{surveyStats.completed}</p>
          </div>
          <div className="card">
            <p className="text-sm text-slate-500">Total Responses</p>
            <p className="text-2xl font-bold text-secondary-600">{surveyStats.totalResponses}</p>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Survey List */}
          <div className="lg:col-span-2 space-y-4">
            {surveys.map((survey) => (
              <div key={survey.id} className="card">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-slate-800">{survey.title}</h3>
                      <Badge
                        variant={
                          survey.status === 'active'
                            ? 'success'
                            : survey.status === 'draft'
                            ? 'warning'
                            : 'info'
                        }
                      >
                        {survey.status.charAt(0).toUpperCase() + survey.status.slice(1)}
                      </Badge>
                    </div>
                    <p className="text-sm text-slate-500 mb-3">{survey.description}</p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
                      <span className="flex items-center gap-1">
                        <CalendarIcon className="w-4 h-4" />
                        Deadline: {survey.deadline}
                      </span>
                      <span>{survey.questions} questions</span>
                      <span>{survey.responses} responses</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        setSelectedSurvey(survey);
                        setIsModalOpen(true);
                      }}
                      className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
                    >
                      <EyeIcon className="w-5 h-5 text-slate-500" />
                    </button>
                    <button className="p-2 rounded-lg hover:bg-slate-100 transition-colors">
                      <EditIcon className="w-5 h-5 text-slate-500" />
                    </button>
                    <button className="p-2 rounded-lg hover:bg-red-50 transition-colors">
                      <TrashIcon className="w-5 h-5 text-red-500" />
                    </button>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-4">
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-slate-500">Response Progress</span>
                    <span className="font-medium text-slate-700">
                      {Math.min((survey.responses / 200) * 100, 100).toFixed(0)}%
                    </span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-primary rounded-full transition-all duration-500"
                      style={{ width: `${Math.min((survey.responses / 200) * 100, 100)}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Chart */}
          <div className="card">
            <h3 className="text-lg font-semibold text-slate-800 mb-4">Response Overview</h3>
            <BarChart data={chartData} height={280} />
          </div>
        </div>

        {/* Survey Details Modal */}
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Survey Details"
        >
          {selectedSurvey && (
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Badge
                    variant={
                      selectedSurvey.status === 'active'
                        ? 'success'
                        : selectedSurvey.status === 'draft'
                        ? 'warning'
                        : 'info'
                    }
                  >
                    {selectedSurvey.status.charAt(0).toUpperCase() +
                      selectedSurvey.status.slice(1)}
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold text-slate-800">
                  {selectedSurvey.title}
                </h3>
                <p className="text-slate-500 mt-2">{selectedSurvey.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-slate-500">Questions</p>
                  <p className="font-medium text-slate-800">{selectedSurvey.questions}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Responses</p>
                  <p className="font-medium text-slate-800">{selectedSurvey.responses}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Created</p>
                  <p className="font-medium text-slate-800">{selectedSurvey.createdAt}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Deadline</p>
                  <p className="font-medium text-slate-800">{selectedSurvey.deadline}</p>
                </div>
              </div>

              <div className="flex gap-3">
                <button className="btn-gradient flex-1">View Responses</button>
                <button className="btn-outline flex-1">Edit Survey</button>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </AdminLayout>
  );
}
