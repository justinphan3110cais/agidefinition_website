import { redirect } from 'next/navigation';

export default function PaperPage() {
  redirect('/paper.pdf');
  return null;
}
