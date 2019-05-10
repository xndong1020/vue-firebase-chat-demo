import db from '@/firebase/init'

export const create = async request => {
  await db.collection('message').add(request)
}
