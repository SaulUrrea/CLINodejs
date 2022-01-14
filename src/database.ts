import { Firestore } from "@google-cloud/firestore";
import { GCP_PROJECT } from "./config";

export const firestore = new Firestore({ projectId: GCP_PROJECT });
