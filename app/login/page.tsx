import AcmeLogo from '@/app/ui/acme-logo';
import LoginForm from '@/app/ui/login-form';

export default async function LoginPage(props: {
  searchParams?: Promise<{ callbackUrl?: string }>;
}) {
  // callbackUrl luetaan palvelimella, jolloin lomake renderöityy valmiiksi
  // HTML:ään eikä tarvitse Suspense-rajaa (toimii myös ilman JavaScriptiä).
  const searchParams = await props.searchParams;
  const callbackUrl = searchParams?.callbackUrl || '/dashboard';

  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
          <div className="w-32 text-white md:w-36">
            <AcmeLogo />
          </div>
        </div>
        <LoginForm callbackUrl={callbackUrl} />
      </div>
    </main>
  );
}
