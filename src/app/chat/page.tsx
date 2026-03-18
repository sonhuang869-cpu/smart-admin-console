'use client';

import { useState } from 'react';
import Image from 'next/image';
import AdminLayout from '@/components/layout/AdminLayout';
import { SearchIcon, SendIcon, PaperclipIcon } from '@/components/icons';
import { conversations, messages, Conversation } from '@/data/mockData';

export default function ChatPage() {
  const [selectedConversation, setSelectedConversation] = useState<Conversation>(
    conversations[0]
  );
  const [newMessage, setNewMessage] = useState('');

  const conversationMessages = messages.filter(
    (m) => m.conversationId === selectedConversation.id
  );

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // In real app, this would send to backend
      console.log('Sending message:', newMessage);
      setNewMessage('');
    }
  };

  return (
    <AdminLayout>
      <div className="h-[calc(100vh-10rem)]">
        <div className="flex h-full bg-white rounded-xl shadow-md overflow-hidden">
          {/* Conversations List */}
          <div className="w-80 border-r border-slate-100 flex flex-col">
            {/* Search Header */}
            <div className="p-4 border-b border-slate-100">
              <h2 className="text-lg font-semibold text-slate-800 mb-3">Messages</h2>
              <div className="flex items-center gap-2 bg-slate-50 rounded-lg px-3 py-2">
                <SearchIcon className="w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search conversations..."
                  className="bg-transparent border-none outline-none flex-1 text-sm text-slate-600 placeholder-slate-400"
                />
              </div>
            </div>

            {/* Conversations List */}
            <div className="flex-1 overflow-y-auto">
              {conversations.map((conversation) => (
                <div
                  key={conversation.id}
                  onClick={() => setSelectedConversation(conversation)}
                  className={`flex items-center gap-3 p-4 cursor-pointer transition-colors ${
                    selectedConversation.id === conversation.id
                      ? 'bg-primary-50'
                      : 'hover:bg-slate-50'
                  }`}
                >
                  <div className="relative">
                    <Image
                      src={conversation.participant.avatar}
                      alt={conversation.participant.name}
                      width={48}
                      height={48}
                      className="rounded-full object-cover"
                    />
                    <span
                      className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
                        conversation.participant.status === 'online'
                          ? 'bg-green-500'
                          : 'bg-slate-400'
                      }`}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium text-slate-800 truncate">
                        {conversation.participant.name}
                      </h3>
                      <span className="text-xs text-slate-400">
                        {conversation.timestamp}
                      </span>
                    </div>
                    <p className="text-sm text-slate-500 truncate">
                      {conversation.lastMessage}
                    </p>
                  </div>
                  {conversation.unreadCount > 0 && (
                    <span className="w-5 h-5 flex items-center justify-center bg-primary-600 text-white text-xs rounded-full">
                      {conversation.unreadCount}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 flex flex-col">
            {/* Chat Header */}
            <div className="flex items-center gap-3 p-4 border-b border-slate-100">
              <Image
                src={selectedConversation.participant.avatar}
                alt={selectedConversation.participant.name}
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
              <div>
                <h3 className="font-medium text-slate-800">
                  {selectedConversation.participant.name}
                </h3>
                <p className="text-sm text-slate-500">
                  {selectedConversation.participant.status === 'online'
                    ? 'Online'
                    : 'Offline'}
                </p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {conversationMessages.map((message) => {
                const isOwnMessage = message.sender.id === '1';
                return (
                  <div
                    key={message.id}
                    className={`flex items-end gap-3 ${
                      isOwnMessage ? 'flex-row-reverse' : ''
                    }`}
                  >
                    <Image
                      src={message.sender.avatar}
                      alt={message.sender.name}
                      width={32}
                      height={32}
                      className="rounded-full object-cover"
                    />
                    <div
                      className={`max-w-md px-4 py-3 rounded-2xl ${
                        isOwnMessage
                          ? 'bg-gradient-primary text-white rounded-br-sm'
                          : 'bg-slate-100 text-slate-800 rounded-bl-sm'
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                      <p
                        className={`text-xs mt-1 ${
                          isOwnMessage ? 'text-white/70' : 'text-slate-400'
                        }`}
                      >
                        {message.timestamp}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-slate-100">
              <div className="flex items-center gap-3">
                <button className="p-2 rounded-lg hover:bg-slate-100 transition-colors">
                  <PaperclipIcon className="w-5 h-5 text-slate-500" />
                </button>
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type a message..."
                  className="flex-1 px-4 py-3 bg-slate-50 rounded-lg border-none outline-none text-sm text-slate-600 placeholder-slate-400 focus:ring-2 focus:ring-primary-200"
                />
                <button
                  onClick={handleSendMessage}
                  className="p-3 bg-gradient-primary rounded-lg text-white hover:opacity-90 transition-opacity"
                >
                  <SendIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
