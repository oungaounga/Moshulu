/** @format */

//-----------------Styles-----------------//
const ITEM_CONTAINER = 'w-full flex flex-col m-1'
const LOCATION_TEXT =
  'text-sm md:text-base indent-1 md:indent-2 text-neutral-400'

const expAng = [
  [
    'Baccalauréat STI2D ITEC, Très Bien',
    'Déodat de Severac High School, Toulouse, France',
    '2018',
  ],
  [
    'Class Préparatoire aux Grandes Ecoles',
    'Léonce Vieljeux High School, La Rochelle, France',
    '2019',
  ],
  ['Mathématiques Générales Licence', 'University of Montpellier', '2021'],
  ['MANU Masters 1', 'University of Montpellier', '2022'],
]
const expFr = [
  ['title', 'location', 'date'],
  ['title', 'location', 'date'],
  ['title', 'location', 'date'],
]
const workExpAng = [
  [
    'Employé Polyvalent, Carrefour City',
    'Avenue de Barcelone, Toulouse',
    '2019/2020',
  ],
  [
    'Responsable de Rayon, Carrefour City',
    'Boulevard de Strasbourg, Montpllier',
    '2020/2023',
  ],
  ['Enseignant de Mathématiques', 'Acadomia, Montpellier', '2022/current'],
]
const workExpFr = [
  ['title', 'location', 'date'],
  ['title', 'location', 'date'],
  ['title', 'location', 'date'],
]

const MakeExpItem = (props) => {
  const item = props.item
  return (
    <>
      <div className="w-full flex flex-col m-1">
        <div className="flex flex-col md:flex-row md:justify-between">
          <p className="text-lg">{item[0]}</p>
          <span className="text-neutral-400">{item[2]}</span>
        </div>
        <p className="text-sm md:text-base indent-1 md:indent-2 text-neutral-400">
          {' '}
          {item[1]}
        </p>
      </div>
    </>
  )
}

function Experience(props) {
  let exp = props.lang ? expAng : expFr
  let work = props.lang ? workExpAng : workExpFr
  return (
    // <div className="p-5 w-screen flex justify-center md:w-[45rem] min-h-[75rem] backdrop-blur-[2px] rounded-sm">
    <div className="p-5 w-screen flex justify-center md:w-[45rem] min-h-fit backdrop-blur-[2px] rounded-sm">
      <div className=" appear w-full h-full flex flex-col gap-6">
        <div className="w-full flex flex-col gap-4">
          <div className="flex justify-end">
            <code className="after:content-['_↗'] hover:underline hover:cursor-pointer">
              CV (PDF)
            </code>
          </div>
          <code className="text-xl md:text-2xl">Education</code>
          <div className="flex flex-col divide-y-[0.5px] gap-2 divide-neutral-700">
            {exp.map((item) => {
              return <MakeExpItem item={item} />
            })}
          </div>
        </div>
        <div className="w-full flex flex-col gap-4">
          <code className="text-xl md:text-xl">Work Experience</code>
          <div className="flex flex-col divide-y-[0.5px] gap-2 divide-neutral-700">
            {work.map((item) => {
              return <MakeExpItem item={item} />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience

// sublinks ?
//       <ul className="flex justify-start">
//           <code className="hover:underline">
//             <Link to="text-lg">PDF</Link>
//           </code>
//         </ul>
//       <div className="bg-slate-300 w-[2480px] h-[3508px] scale-[0.3]">
//           <div className="w-full h-full flex flex-col">
//             <div className="w-full h-[15%] bg-red-500"></div>
//             <div className="w-full h-[65%] flex">
//               <div className="w-[50%] h-full bg-green-400"></div>
//               <div className="w-[50%] h-full bg-blue-600"></div>
//             </div>
//             <div></div>
//             <div></div>
//           </div>
//         </div>
