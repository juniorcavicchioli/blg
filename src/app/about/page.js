import Menu from '@/components/Menu';
import { Section } from '@/components/Section';
import Link from 'next/link';

function About() {
    return (
        <>
            <Menu />
            <Section className="pb-12">
                <div className="flex justify-center space-x-4 px-4">
                    <div className="mt-16 w-full lg:max-w-screen-lg">
                        <div className="rounded-xl border-4 border-earth-1 bg-bg-1 font-medium text-earth-2">
                            <div className="flex gap-2 rounded-t-lg border-b-4 border-earth-1 bg-bg-4 px-4 py-2">
                                <Link href="/blog">
                                    <div className="h-4 w-4 rounded-full bg-red-500 " />
                                </Link>
                                <div className="h-4 w-4 rounded-full bg-orange-300 " />
                                <div className="h-4 w-4 rounded-full bg-green-400 " />
                            </div>

                            <article>
                                <div className="px-6 py-8 md:px-12">
                                    <div className="post-wrapper relative mt-8">
                                        ESCREVA AQUI                                    
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    )
}

export default About;