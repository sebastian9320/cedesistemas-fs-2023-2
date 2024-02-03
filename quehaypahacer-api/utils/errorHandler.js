const errorHandler = (errorItem, extra = {}) => {
  const response = {
    ...extra,
    message: extra.message ? `${errorItem.message}: ${extra.message}`: errorItem.message
  }

  return {
    status: errorItem.status,
    response,
    handled: true
  }
}

export default errorHandler
