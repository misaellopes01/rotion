import { ToC } from '../components/ToC'

export function Document() {
  return (
    <main className="flex-1 flex py-12 px-10 gap-8">
      <aside className="hidden lg:block sticky top-0">
        <span className="text-rotion-300 font-semibold text-xs">
          TABLE OF CONTENTS
        </span>

        <ToC.Root>
          <ToC.Link>Back-end</ToC.Link>
          <ToC.Section>
            <ToC.Link>Banco de Dados</ToC.Link>
            <ToC.Link>Auth</ToC.Link>
          </ToC.Section>
        </ToC.Root>
      </aside>

      <section className="flex-1 flex-col items-center">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
        nesciunt officia velit aperiam, ullam tempore consequatur est id!
        Ratione ullam sunt dolor enim voluptatibus reprehenderit earum quos
        autem molestias quia!
      </section>
    </main>
  )
}
