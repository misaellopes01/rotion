import { ipcMain } from 'electron'
import { IPC } from '@shared/constants/ipc'
import {
  CreateDocumentResponse,
  DeleteDocumentRequest,
  FetchAllDocumentsResponse,
  FetchDocumentRequest,
  FetchDocumentResponse,
  SaveDocumentRequest,
} from '@shared/types/ipc'
import { store } from './store'

ipcMain.handle(
  IPC.DOCUMENTS.FETCH_ALL,
  async (): Promise<FetchAllDocumentsResponse> => {
    return {
      data: Object.values(store.get('documents')),
    }
  },
)
ipcMain.handle(
  IPC.DOCUMENTS.FETCH,
  async (_, { id }: FetchDocumentRequest): Promise<FetchDocumentResponse> => {
    const document = store.get<string, Document>(`documents.${id}`)
    return {
      data: document,
    }
  },
)
ipcMain.handle(
  IPC.DOCUMENTS.CREATE,
  async (): Promise<CreateDocumentResponse> => {
    return {
      document: {},
    }
  },
)
ipcMain.handle(
  IPC.DOCUMENTS.SAVE,
  async ({ id }: SaveDocumentRequest): Promise<void> => {},
)
ipcMain.handle(
  IPC.DOCUMENTS.DELETE,
  async ({ id }: DeleteDocumentRequest): Promise<void> => {},
)
