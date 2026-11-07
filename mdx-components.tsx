import type { MDXComponents } from 'mdx/types'

const components: MDXComponents = {
  h1: (props) => <h1 className="text-2xl mb-2" {...props}/>,
  h2: (props) => <h2 className="text-xl underline underline-offset-1" {...props}/>,
  p: ({ className, ...props }) => (
    <p
      className={className ? `mb-1 leading-relaxed ${className}` : "mb-1 leading-relaxed"}
      {...props}
    />
  ),
  a: (props) => <a className="underline underline-offset-1 hover:text-indigo-600" {...props}/>,
  li: (props) => <li className="list-disc ml-6 mb-1" {...props}/>
}

export function useMDXComponents(): MDXComponents {
  return components
}