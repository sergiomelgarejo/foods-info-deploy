const API_URL = "https://api.nal.usda.gov/fdc/v1"

export function get(path) {
  const url = `${API_URL}${path}`
  
  return fetch(url, {
  }).then(result => result.json())
}
