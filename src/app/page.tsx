import getFile from '@/lib/getFile'
import Main from './mainContainer'

export default async function Page() {

  const file = await getFile();
  const data = JSON.parse(file) as Array<Array<TData>>

  return (
    <div>
      <Main data={data} />
    </div>
  )
}