import { getMongoDb } from "@/utils/mongodbConnection";
import bcrypt from 'bcrypt';

const handler = async (req, res) => {  
  if (req.method === 'PUT') {
    const db = await getMongoDb();
    const collection = db.collection('users');

    const body = JSON.parse(req.body);
    const userFound = await collection.findOne({
      email: body.email
    }, { projection: { _id: 0 }});

    if (!userFound) {
      return res.status(400).json({
        success: false
      })
    }

    const { password, ...restOfUser } = userFound;
    const match = await bcrypt.compare(body.password, password);

    res.status(200).json({
      validUser: !!match,
      ...(match ? { user: restOfUser } : {})
    });
  }

  if (req.method === 'POST') {
    const db = await getMongoDb();
    const collection = db.collection('users');

    const body = JSON.parse(req.body);
    const pwHashed = await bcrypt.hash(body.password, 10);

    await collection.insertOne({
      ...body,
      password: pwHashed
    });

    res.status(200).json({
      success: true
    });
  }
}

export default handler;