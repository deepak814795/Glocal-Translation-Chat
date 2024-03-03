import { AlertCircle } from "lucide-react"; // 1.1k (gzipped: 649)
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "./ui/button";
import Link from "next/link"; // 31.2k (gzipped: 9.1k)

function ChatPermissionError() {
  return (
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription className="flex">
        <p className="flex-1">
          You do not have permission to view this chat.
          <br />
          <span className="font-bold">
            Please ask the chat admin to add you to the chat.
          </span>
        </p>
        <Link href="/chat" replace>
          <Button variant="destructive">Dismiss</Button>
        </Link>
      </AlertDescription>
    </Alert>
  );
}

export default ChatPermissionError;
