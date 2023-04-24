/** @format */

//-----------------Styles-----------------//
const ITEM_CONTAINER = 'flex flex-col m-1'
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
      <div className={ITEM_CONTAINER}>
        <p className="text-lg">{item[0]}</p>
        <p className={LOCATION_TEXT}> {item[1]}</p>
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
      <div className="appear">
        <div className="w-full h-full flex flex-col gap-6">
          <div className="w-full flex flex-col gap-4">
            <div className="w-full flex justify-between">
              <code className="text-xl md:text-2xl">Education</code>
              <code className="after:content-['_↗'] hover:underline">
                CV (PDF)
              </code>
            </div>
            <div className="flex flex-col divide-y-[0.5px] gap-2 divide-neutral-700">
              {/* <div className={ITEM_CONTAINER}>
                <p className="text-lg">Baccalauréat STI2D ITEC, Très Bien</p>
                <p className={LOCATION_TEXT}>
                  {' '}
                  Déodat de Séverac High School, Toulouse, France
                </p>
              </div>
              <div className={ITEM_CONTAINER}>
                <p className="text-lg">
                  Classe Préparatoire aux Grandes écoles
                </p>
                <p className={LOCATION_TEXT}>
                  {' '}
                  Léonce Vieljeux High School, La Rochelle
                </p>
              </div>
              <div className={ITEM_CONTAINER}>
                <p className="text-lg">Licence Mathématiques Générales</p>
                <p className={LOCATION_TEXT}>
                  {' '}
                  University of Science, Montpellier
                </p>
              </div>
              <div className={ITEM_CONTAINER}>
                <p className="text-lg">MANU Masters 1</p>
                <p className={LOCATION_TEXT}>
                  {' '}
                  University of Science, Montpellier
                </p>
              </div> */}
              {exp.map((item) => {
                return <MakeExpItem item={item} />
              })}
            </div>
          </div>
          <div className="w-full flex flex-col gap-4">
            <code className="text-xl md:text-xl">Work Experience</code>
            <div className="flex flex-col divide-y-[0.5px] gap-2 divide-neutral-700">
              {/* <div className={ITEM_CONTAINER}>
                <p className="text-lg">Employé Polyvalent, Carrefour City</p>
                <p className={LOCATION_TEXT}> Avenue de Barcelone, Toulouse</p>
              </div>
              <div className={ITEM_CONTAINER}>
                <p className="text-lg">Responsable de Rayon, Carrefour City</p>
                <p className={LOCATION_TEXT}>
                  {' '}
                  Boulevard de Strasbourd, Montpellier
                </p>
              </div>
              <div className={ITEM_CONTAINER}>
                <p className="text-lg">Enseignant Mathématiques</p>
                <p className={LOCATION_TEXT}> Acadomia, Montpellier</p>
              </div> */}
              {work.map((item) => {
                return <MakeExpItem item={item} />
              })}
            </div>
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
