import getFile from '@/lib/getFile'
import Main from './mainContainer'

export default async function Page() {

  type TData = {
    timeFrom: string;
    timeTo: string;
    courseCode: string;
    subject: string;
    professor: string;
  }

  const file = await getFile();
  const data = JSON.parse(file) as Array<Array<TData>>

  return (
    <div>
      <Main data={data} />
    </div>
  )
}