import mongoose from 'mongoose';

const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,       
      useUnifiedTopology: true,      
     
      writeConcern: {
        w: 'majority',               
        wtimeout: 5000,             
      }
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit the process with an error code if the connection fails
  }
};

export default connectDatabase;
