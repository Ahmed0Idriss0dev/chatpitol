import { Client, Databases} from 'appwrite';
export { ID } from 'appwrite';

export const client = new Client();

client
    .setEndpoint(process.env.APPWRITE_REGION as string)
    .setProject(process.env.APPWRITE_PROJECT_ID as string); // Replace with your project ID

export const db = new Databases(client);
