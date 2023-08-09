import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Plus } from 'phosphor-react'
import { useEffect } from 'react'
import { Document } from '~/src/shared/types/ipc'

export function CreatePage() {
  const queryClient = useQueryClient()

  useEffect(() => {
    window.api.onNewDocumentRequest(() => {
      console.log('Misael Lopes')
    })
  }, [])

  const { isLoading: isCreatingNewDocument, mutateAsync: createDocument } =
    useMutation(
      async () => {
        const response = await window.api.createDocument()
        return response.data
      },
      {
        onSuccess: (data) => {
          // To invalidade the last query and update with new data
          // queryClient.invalidateQueries(['documents'])
          queryClient.setQueryData<Document[]>(['documents'], (documents) => {
            if (documents && documents?.length >= 0) {
              return [...documents, data]
            } else {
              return [data]
            }
          })
        },
      },
    )
  return (
    <button
      onClick={() => createDocument()}
      disabled={isCreatingNewDocument}
      className="flex w-[240px] px-5 items-center text-sm gap-2 absolute bottom-0 left-0 right-0 py-4 border-t border-rotion-600 hover:bg-rotion-700 disabled:opacity-60"
    >
      <Plus className="h-4 w-4" />
      Novo documento
    </button>
  )
}
