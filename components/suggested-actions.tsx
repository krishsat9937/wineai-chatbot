'use client';

import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ChatRequestOptions, CreateMessage, Message } from 'ai';
import { memo } from 'react';
import Image from 'next/image';

interface SuggestedActionsProps {
  chatId: string;
  append: (
    message: Message | CreateMessage,
    chatRequestOptions?: ChatRequestOptions,
  ) => Promise<string | null | undefined>;
}

function PureSuggestedActions({ chatId, append }: SuggestedActionsProps) {
  const genericAvatar = '/images/dummy_avatar.png';

  const suggestedActions = [
    {
      title: 'What makes a good wine?',
      label: 'Rita, Manteigas',
      avatar: genericAvatar,
      action: 'What makes a good wine?',
    },
    {
      title: 'Best wine in the world',
      label: 'Joana, Porto',
      avatar: genericAvatar,
      action: 'Best wine in the world',
    },
    {
      title: 'How long can I keep champagne?',
      label: 'João, Description',
      avatar: genericAvatar,
      action: 'How long can I keep champagne?',
    },
    {
      title: 'How to serve wine best',
      label: 'Title, Description',
      avatar: genericAvatar,
      action: 'How to serve wine best',
    },
    {
      title: 'How did port wine come about?',
      label: 'Title, Description',
      avatar: genericAvatar,
      action: 'How did port wine come about?',
    },
    {
      title: 'Something nice',
      label: 'Title, Description',
      avatar: genericAvatar,
      action: 'Something nice',
    },
  ];

  return (
    <div>
      <div className="mb-4">
        <div className="text-center">
          <h1 className="text-lg font-semibold">Everything about Wine</h1>
          <h3 className="text-sm text-muted-foreground">What would you like to know?</h3>
        </div>        
      </div>
      <div className="grid sm:grid-cols-2 gap-2 w-full">
        {suggestedActions.map((suggestedAction, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.05 * index }}
            key={`suggested-action-${suggestedAction.title}-${index}`}
            className={index > 3 ? 'hidden sm:block' : 'block'}
          >
            <Button
              variant="ghost"
              onClick={async () => {
                window.history.replaceState({}, '', `/chat/${chatId}`);

                append({
                  role: 'user',
                  content: suggestedAction.action,
                });
              }}
              className="text-left border rounded-xl px-4 py-3.5 text-sm flex gap-3 sm:flex-col w-full h-auto justify-start items-start"
            >
              <Image
                src={suggestedAction.avatar}
                alt={suggestedAction.label}
                width={32}
                height={32}
                className="rounded-full"
              />
              <div className="flex-1">
                <span className="font-medium block">{suggestedAction.title}</span>
                <span className="text-muted-foreground block">
                  {suggestedAction.label}
                </span>
              </div>
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export const SuggestedActions = memo(PureSuggestedActions, () => true);
