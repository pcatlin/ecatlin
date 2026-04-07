import {codeToHtml} from "shiki";
import {BundledLanguage} from "shiki/bundle/web";

interface Props {
    children: string
    lang: BundledLanguage
}

export async function CodeBlock(props: Props) {
    const out = await codeToHtml(props.children, {
        lang: props.lang,
        theme: 'aurora-x',
    })

    return (
        <div className="text-base my-5" dangerouslySetInnerHTML={{__html: out}}/>
    )
}