import mongoose from 'mongoose';
import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../database';
import { Entry, IEntry } from '@/models';

type Data = { message: string } | IEntry;

export default function (req: NextApiRequest, res: NextApiResponse<Data>) {
  const { id } = req.query;

  if (!mongoose.isValidObjectId(id)) {
    console.log(id);
    return res.status(400).json({ message: 'El id no es válido' });
  }

  switch (req.method) {
    case 'PUT':
      return updateEntry(req, res);

    default:
      return res.status(400).json({ message: 'El id no es válido ' + id });
  }
}

const updateEntry = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  await db.connect();
  const entryToUpdated = await Entry.findById(id);

  if (!entryToUpdated) {
    return res.status(400).json({ message: 'No ha entrada con ese id: ' + id });
  }

  const {
    description = entryToUpdated.description,
    status = entryToUpdated.status,
  } = req.body;
  const updatedAt = Date.now();

  try {
    const updatedEntry = await Entry.findByIdAndUpdate(
      id,
      { description, status, updatedAt },
      { runValidators: true, new: true }
    );
    await db.disconnect();
    res.status(200).json(updatedEntry);

  } catch (error: any) {
    console.log(error);
    res.status(400).json({ message: error.errors.status.message });

  } finally {
    db.disconnect();
  }
};
