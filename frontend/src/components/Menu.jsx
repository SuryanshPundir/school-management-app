const menuItems = [
  {
    title: 'MENU',
    items: [
      { icon: '/home.png', label: 'Home', href: '/', visible: ['admin', 'teacher', 'student', 'parent'] },
      { icon: '/teacher.png', label: 'Teachers', href: '/list/teachers', visible: ['admin', 'teacher'] },
      { icon: '/student.png', label: 'Students', href: '/list/students', visible: ['admin', 'teacher'] },
      { icon: '/parent.png', label: 'Parents', href: '/list/parents', visible: ['admin', 'teacher'] },
      { icon: '/subject.png', label: 'Subjects', href: '/list/subjects', visible: ['admin'] },
      { icon: '/class.png', label: 'Classes', href: '/list/classes', visible: ['admin', 'teacher'] },
      { icon: '/lesson.png', label: 'Lessons', href: '/list/lessons', visible: ['admin', 'teacher'] },
      { icon: '/exam.png', label: 'Exams', href: '/list/exams', visible: ['admin', 'teacher', 'student', 'parent'] },
      { icon: '/assignment.png', label: 'Assignments', href: '/list/assignments', visible: ['admin', 'teacher', 'student', 'parent'] },
      { icon: '/result.png', label: 'Results', href: '/list/results', visible: ['admin', 'teacher', 'student', 'parent'] },
      { icon: '/attendance.png', label: 'Attendance', href: '/list/attendance', visible: ['admin', 'teacher', 'student', 'parent'] },
      { icon: '/calendar.png', label: 'Events', href: '/list/events', visible: ['admin', 'teacher', 'student', 'parent'] },
      { icon: '/message.png', label: 'Messages', href: '/list/messages', visible: ['admin', 'teacher', 'student', 'parent'] },
      { icon: '/announcement.png', label: 'Announcements', href: '/list/announcements', visible: ['admin', 'teacher', 'student', 'parent'] },
    ],
  },
  {
    title: 'OTHER',
    items: [
      { icon: '/profile.png', label: 'Profile', href: '/profile', visible: ['admin', 'teacher', 'student', 'parent'] },
      { icon: '/setting.png', label: 'Settings', href: '/settings', visible: ['admin', 'teacher', 'student', 'parent'] },
      { icon: '/logout.png', label: 'Logout', href: '/logout', visible: ['admin', 'teacher', 'student', 'parent'] },
    ],
  },
];

export default function Menu() {
  return (
    <div>{menuItems.map(i => (
      <div key={i.title} className="mb-4">
        <h2 className="text-sm font-bold text-gray-600 mb-4">{i.title}</h2>
        <ul className="flex flex-col gap-3">
          {i.items.map((item) => (
            <li key={item.label} className="flex items-center gap-2">
              <img src={item.icon} alt={item.label} width={20} height={20} />
              <a href={item.href} className="text-sm text-gray-600 hover:text-gray-900 hidden lg:block">{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
    ))}</div>
  )
}

