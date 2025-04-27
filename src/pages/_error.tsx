import { Button } from "@/common/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/common/components/ui/card";
import { useRouter } from "next/router";

export default function Error() {
  const router = useRouter();

  const handleReloadPage = () => router.reload();
  const handleGoHome = () => router.push("/inicio");
  const handleGoBack = () => router.back();

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <Card className="p-10">
        <CardHeader>
          <CardTitle>Ha ocurrido un error</CardTitle>
        </CardHeader>

        <CardContent className="grid grid-cols-2 gap-4">
          <Button onClick={handleReloadPage} className="w-full">
            Recargar
          </Button>
          <Button onClick={handleGoBack} className="w-full">
            Volver
          </Button>
          <Button onClick={handleGoHome} className="w-full col-span-2">
            Ir al inicio
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
