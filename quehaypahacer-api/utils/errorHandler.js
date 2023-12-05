const errorHandler = (errorItem, extra = {}) => {
  const response = {
    ...extra,
    message: `${errorItem.message}: ${extra.message}`
  }

  return {
    status: errorItem.status,
    response,
    handled: true
  }
}

export default errorHandler
