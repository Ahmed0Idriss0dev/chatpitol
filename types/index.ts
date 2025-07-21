export type CustomData = {
  name: string;           // required
  customPrompt: string;   // required
  firstMessage: string;
  userId:string
};
interface ButtonLinks{
    label:string ,
    icons:React.ReactNode
}
export type Chatbotdata = {
  name: string;
  customPrompt: string;
  firstMessage: string;
  userId: string;
  $id: string;
  $sequence: string;
  $createdAt: string;
  $updatedAt: string;
  $permissions: string[];
  $databaseId: string;
  $collectionId: string;
};
