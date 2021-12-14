import React from 'react'

const Widget4 = () => {

    const notificationList = [
        { useName: 'Alice C.', description: 'left a comment.', time: '2 hours ago' },
        { useName: 'Joshua S.', description: 'uploaded a file.', time: '2 hours ago' },
        { useName: 'Tara S.', description: 'sent you a message.', time: '2 hours ago' },
        { useName: 'Melany W.', description: 'left a comment.', time: '3 hours ago' },

    ]

    return (
        <ul className="notification-list">
            {
                notificationList?.map((notificationItem, index) =>
                    <li key={index}>
                        <a href='/' className="notification-item">
                            <div className="img-left">
                                <img className="user-photo" alt="" src="https://via.placeholder.com/150x150" data-demo-src="assets/img/avatars/photos/7.jpg" />
                            </div>
                            <div className="user-content">
                                <p className="user-info"><span className="name">{notificationItem?.useName}</span> {notificationItem?.description}</p>
                                <p className="time">{notificationItem?.time}</p>
                            </div>
                        </a>
                    </li>
                )
            }
        </ul>
    )
}

export { Widget4 }
