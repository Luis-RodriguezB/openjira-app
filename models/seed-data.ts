import { EntryStatus } from '@/interfaces';

interface SeedEntry {
  description: string;
  status: EntryStatus;
  createdAt: number;
  updatedAt: number;
}

interface SeedData {
  entries: SeedEntry[];
}

export const seedData: SeedData = {
  entries: [
    {
      description: 'Elit minim tempor consectetur duis officia culpa ea.',
      status: EntryStatus.PENDING,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    },
    {
      description: 'Occaecat nostrud ut id esse do nulla id Lorem sit.',
      status: EntryStatus.INPROGRESS,
      createdAt: Date.now() - 100000,
      updatedAt: Date.now() - 100000,
    },
    {
      description:
        'Veniam ea dolor in consequat officia pariatur proident dolor Lorem veniam commodo velit elit.',
      status: EntryStatus.FINISHED,
      createdAt: Date.now() - 150000,
      updatedAt: Date.now() - 150000,
    },
  ],
};
