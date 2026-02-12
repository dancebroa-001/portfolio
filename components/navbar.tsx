import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6 md:px-10">
                <a href="#inicio" className="font-semibold tracking-tight">
                    Daniel
                </a>

                <nav className="flex items-center gap-2">
                    <Button variant="ghost" asChild>
                        <a href="#tecnologias">Tecnologías</a>
                    </Button>
                    <Button variant="ghost" asChild>
                        <a href="#proyectos">Proyectos</a>
                    </Button>
                    <Button variant="ghost" asChild>
                        <a href="#contacto">Contacto</a>
                    </Button>


                    <ModeToggle />
                </nav>
            </div>
        </header>
    );
}
