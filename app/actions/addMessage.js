'use server';
import connectDB from '@/config/database';
import Message from '@/models/Message';
import { getSessionUser } from '@/utils/getSessionUser';

async function addMessage(previousState, formData) {
  await connectDB();

  const sessionUser = await getSessionUser();

  if (!sessionUser || !sessionUser.userId) {
    return { error: 'You must be logged in to send a message' };
  }

  const { userId } = sessionUser;

  const recipient = formData.get('recipient');

  if (userId === recipient) {
    return { error: 'You can not send a message to yourself' };
  }

  const newMessage = new Message({
    sender: userId,
    recipient,
    product: formData.get('product'),
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    body: formData.get('body'),
  });

  await newMessage.save();

  return { submitted: true };
}

export default addMessage;