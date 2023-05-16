import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = ({ dark }) => {
	return (
		<nav className='navigation'>
			<ul>
				<li>
					<Link
						className={`${
							dark
								? 'navigation__item_dark navigation__item_dark_active'
								: 'navigation__item navigation__item_active'
						}  paragraph-l`}
						to='/'
					>
						About the shelter
					</Link>
				</li>
				<li>
					<Link
						className={`${
							dark ? 'navigation__item_dark' : 'navigation__item'
						}  paragraph-l`}
						to='/'
					>
						Our pets
					</Link>
				</li>
				<li>
					<Link
						className={`${
							dark ? 'navigation__item_dark' : 'navigation__item'
						}  paragraph-l`}
						to='/'
					>
						Help the shelter
					</Link>
				</li>
				<li>
					<Link
						className={`${
							dark ? 'navigation__item_dark' : 'navigation__item'
						}  paragraph-l`}
						to='/'
					>
						Contacts
					</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Navigation
