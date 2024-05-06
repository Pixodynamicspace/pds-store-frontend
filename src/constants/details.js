const token = JSON.parse(sessionStorage.getItem('token'))
export const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };

export const getConfigure = ( token ) => {
    return {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
}

export const roles = {
    admin: 'ADMIN',
    staff:  'STAFF',
    client: 'CLIENT'
}

export const sex = ['male', 'female', 'others']

// eslint-disable-next-line
export const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
export const mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");