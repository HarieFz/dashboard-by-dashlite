import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div className="font-inter flex flex-col justify-center items-center gap-5 min-h-screen">
        <p className="font-bold text-9xl text-primary-500">{error.status}</p>
        <p className="font-bold text-4xl text-primary-500">Oops! Terjadi Kesalahan.</p>
        <p className="font-semibold text-2xl text-primary-500">
          Silakan coba lagi atau hubungi tim dukungan jika masalah ini berlanjut.
        </p>
      </div>
    );
  } else if (error instanceof Error) {
    return (
      <div className="font-inter flex flex-col justify-center items-center gap-5 min-h-screen">
        <p className="font-bold text-4xl text-primary-500">Oops! Terjadi Kesalahan.</p>
        <p className="font-semibold text-2xl text-primary-500">
          Silakan coba lagi atau hubungi tim dukungan jika masalah ini berlanjut.
        </p>
      </div>
    );
  } else {
    return <></>;
  }
}
