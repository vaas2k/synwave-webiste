import Link from "next/link"
import { Button } from "../../components/ui/button"

export default function NotFoundCatchAll() {
    return (<div className='h-screen flex items-center justify-center flex-col'>
        <h1>Not found - 404!</h1> <br />
        <Link href="/">
            <Button className="bg-rose-600">
                Go back to Home
            </Button>
        </Link>
    </div>)
}