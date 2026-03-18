'use client';

import { useState } from 'react';
import { SearchIcon, FilterIcon, ChevronDownIcon } from '../icons';

interface Column<T> {
  key: keyof T | string;
  header: string;
  render?: (item: T) => React.ReactNode;
}

interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  searchPlaceholder?: string;
  onSearch?: (query: string) => void;
}

export default function DataTable<T extends { id: string }>({
  data,
  columns,
  searchPlaceholder = 'Search...',
}: DataTableProps<T>) {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const filteredData = data.filter((item) => {
    if (!searchQuery) return true;
    return columns.some((col) => {
      const value = item[col.key as keyof T];
      if (typeof value === 'string') {
        return value.toLowerCase().includes(searchQuery.toLowerCase());
      }
      return false;
    });
  });

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      {/* Header */}
      <div className="p-4 border-b border-slate-100 flex flex-col sm:flex-row gap-4 justify-between">
        <div className="flex items-center gap-2 bg-slate-50 rounded-lg px-4 py-2 flex-1 max-w-md">
          <SearchIcon className="w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder={searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent border-none outline-none flex-1 text-sm text-slate-600 placeholder-slate-400"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
          <FilterIcon className="w-4 h-4 text-slate-500" />
          <span className="text-sm text-slate-600">Filter</span>
          <ChevronDownIcon className="w-4 h-4 text-slate-400" />
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={String(column.key)} className="table-header">
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item) => (
              <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                {columns.map((column) => (
                  <td key={String(column.key)} className="table-cell">
                    {column.render
                      ? column.render(item)
                      : String(item[column.key as keyof T] ?? '')}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="p-4 border-t border-slate-100 flex items-center justify-between">
          <p className="text-sm text-slate-500">
            Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredData.length)} of {filteredData.length} entries
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 text-sm border border-slate-200 rounded-lg hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-1 text-sm rounded-lg transition-colors ${
                  currentPage === page
                    ? 'bg-gradient-primary text-white'
                    : 'border border-slate-200 hover:bg-slate-50'
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="px-3 py-1 text-sm border border-slate-200 rounded-lg hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
