import { PushPin } from '@phosphor-icons/react'

const LooseCourse = ({ item, isLast, choose }) => {
	return (
		<>
			<div
				className='content_elem_row select'
				onClick={choose}
				// onClick={() => choose(
				//     {
				//         course_id: item.course_id,
				//         course_name: item.course_name
				//     }
				// )}
			>
				<p>{item.course_name}</p>
				<PushPin weight='bold' className='icon_min' />
			</div>

			{!isLast && <div className='breaker'></div>}
		</>
	)
}

export default LooseCourse
