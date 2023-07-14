import { ipcMain } from 'electron'

ipcMain.handle('fetch-documents', async () => {
  return [
    { id: '1', title: 'Ignite' },
    { id: '2', title: 'Explorer' },
    { id: '3', title: 'Discover' },
    { id: '4', title: 'Rocketseat Plus' },
  ]
})
