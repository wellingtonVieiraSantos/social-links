/* eslint-disable react/prop-types */

const LinkButton = ({color, link, children}) => {
  return (
    <a href={link} target='_blank' rel="external noreferrer" className={`p-2 rounded bg-slate-100 hover:text-${color} transition-all`}>
      <div className='flex justify-between items-center'>
        {children}
      </div>
    </a>
  )
}

export default LinkButton