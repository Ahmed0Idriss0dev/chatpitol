import { Query } from "appwrite";
import { db, ID } from "./appwrite";
import { auth } from "@clerk/nextjs/server";
const dbId='687cc33900353ce3d227';
const documentid ='687cc58a002fd9208287'
export async function CreateBot(data:CustomData){
   try {
      const response = await db.createDocument(
         dbId,
          documentid ,
          ID.unique() ,
          data
       )
       return response
   } catch (error) {
      console.log(error)
   }
}
export async function getByUserId(){
   try {
      const {userId} = await auth()
      const response = await db.listDocuments(
         dbId,
          documentid ,
          [
            Query.equal('userId', userId as string)
          ]
       )
       return response
   } catch (error) {
      console.log(error)
   }
}

export async function GetbydocId(id:string){
   try {
      const {userId} = await auth()
      const response = await db.getDocument(
         dbId,
          documentid ,
          id
       )
       return response
   } catch (error) {
      console.log(error)
   }
}
