export const PUSH_NOTIFICATION = (state, notification)=>{
    state.notifications.push({
        ...notification,
        id: (Math.random().toString(32)+Date.now.toString(32).substring)
    })
}

export const REMOVE_NOTIFICATION = (state, notification) => {
  state.notifications = state.notifications.filter(notifications=>{
    return notifications.id != notification.id
  })
}
