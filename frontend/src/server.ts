import mongoose from 'mongoose';
import app from './appServer';

const PORT = process.env.PORT || 5001;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/earlybird';

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(error => {
    console.error('MongoDB connection error:', error);
  });

