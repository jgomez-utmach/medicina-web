import DB from '@data/index';

const services = async (req, res) => {
  try {
    const db = new DB();
    const allEntries = await db.getAllServices();
    res.status(200).json({ data: allEntries });
  } catch (e) {
    console.error(e);
    res.status(500).json({ data: [], error: 'Something went wrong' });
  }
};

export default services;
