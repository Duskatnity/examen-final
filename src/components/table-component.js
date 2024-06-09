class Table extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })

    this.data = []
  }

  async connectedCallback () {
    await this.loadData()
    await this.render()
  }

  loadData () {
    this.data = [
      {
        "id": 1,
        "name": "Joe Schilder",
        "email": "aaaa@gmail.com",
        "telephone": "+1 (731) 342-9783",
        "age": 39,
        "country": "Canada",
        "status": "Rejected"
      },
      {
        "id": 2,
        "name": "Phoebe Venturi",
        "email": "bbbb@gmail.com",
        "telephone": "+1 (887) 744-6950",
        "age": 52,
        "country": "Thailand",
        "status": "Verified"
      },
      {
        "id": 3,
        "name": "Caroline Pandolfi",
        "email": "cccc@gmail.com",
        "telephone": "+1 (618) 787-3453",
        "age": 45,
        "country": "Barbados",
        "status": "Pending"
      },
    ]
  }

  render () {
    this.shadow.innerHTML =
      /* html */`
      <style>
        .content {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          width: 100rem;
          border: 1px solid #dddddd;
          border-top-left-radius: 1rem;
          border-top-right-radius: 1rem;
          padding: 2rem 0rem;
        }

        .search-bar {
          display: flex;
          justify-content: space-between;
          gap: 60rem;
        }

        .record-search {
          padding: 1rem;
          border-color: gray;
          border-radius: 0.5rem;
          align-items: left;
        }

        .sorter {
          display: flex;
          gap: 1rem;
          align-items: right;
        }

        .sorter select {
          padding: 0rem 2rem;
          text-align: left;
          border-radius: 1rem;
          font-size: 1rem;
        }

        .dropdown {
          border-color: cyan;
        }

        .add-customer {
          padding: 0rem 2rem;
          border: none;
          border-radius: 1rem;
          background-color: hsla(217, 100%, 50%, 1);
          color: white;
          font-size: 1rem;
        }

        table {
          font-family: arial, sans-serif;
          border-collapse: collapse;
          width: 100rem;
        }

        tr {
          border: 1px solid #dddddd;
        }

        th {
          background-color: hsla(100, 0%, 93%, 1);
          text-align: left;
          padding: 1rem;
        }

        td {
          text-align: left;
          padding: 1rem;
        }

        .email {
          color: gray;
        }

        .user-icon img {
          width: 2rem;
          height: 2rem;
          align-items: center;
        }

        .user-data {
          display: flex;
          flex-direction: row;
          align-items: center;
        }

        .user-data p {
          margin: 0.5rem;
        }

        .accepted {
          align-items: center;
        }

        .accepted p {
          text-align: center;
          color: green;
          background-color: lightgreen;
          border-radius: 1rem;
          width: 5rem;
          padding: 0.3rem;
        }

        .rejected p {
          text-align: center;
          color: red;
          background-color: pink;
          border-radius: 1rem;
          width: 5rem;
          padding: 0.3rem;
        }

        .pending p {
          text-align: center;
          color: blue;
          background-color: lightblue;
          border-radius: 1rem;
          width: 5rem;
          padding: 0.3rem;
        }
      </style>

      <div class="content">
        <div class="search-bar">
          <input type="text" class="record-search" placeholder="Search 100 records...">
          <div class="sorter">
            <select class="dropdown">
              <option value="opcion1">Opción 1</option>
              <option value="opcion2">Opción 2</option>
              <option value="opcion3">Opción 3</option>
              <option value="opcion4">Opción 4</option>
            </select>
            <button class="add-customer">+ Add Customer</div>
          </div>
        </div>
        <table class="users-list">
          <tr>
            <th><input type="checkbox"></th>
            <th>#</th>
            <th>CUSTOMER NAME</th>
            <th>CONTACT</th>
            <th>AGE</th>
            <th>COUNTRY</th>
            <th>STATUS</th>
            <th>ACTIONS</th>
          </tr>
        </table>
      </div>
      `

      const userList = this.shadow.querySelector('.users-list')

      this.data.forEach(userItem => {
        const tableItem = document.createElement('tr')
        userList.appendChild(tableItem)

        const tableCheckbox = document.createElement('td')
        tableItem.appendChild(tableCheckbox)

        const checkbox = document.createElement('input')
        checkbox.setAttribute('type', 'checkbox')
        tableCheckbox.appendChild(checkbox)

        const userID = document.createElement('td')
        userID.textContent = userItem.id
        tableItem.appendChild(userID)

        const userData = document.createElement('td')
        userData.classList.add('user-data')
        tableItem.appendChild(userData)

        const userIcon = document.createElement('div')
        userIcon.classList.add('user-icon')
        userData.appendChild(userIcon)

        const userImage = document.createElement('img')
        userImage.setAttribute('src', 'profile.png')
        userIcon.appendChild(userImage)

        const userInfo = document.createElement('div')
        userInfo.classList.add('user-info')
        userData.appendChild(userInfo)

        const userName = document.createElement('p')
        userName.textContent = userItem.name
        userInfo.appendChild(userName)

        const userEmail = document.createElement('p')
        userEmail.classList.add('email')
        userEmail.textContent = userItem.email
        userInfo.appendChild(userEmail)

        const userContact = document.createElement('td')
        userContact.textContent = userItem.telephone
        tableItem.appendChild(userContact)

        const userAge = document.createElement('td')
        userAge.textContent = userItem.age
        tableItem.appendChild(userAge)

        const userCountry = document.createElement('td')
        userCountry.textContent = userItem.country
        tableItem.appendChild(userCountry)

        const userStatus = document.createElement('td')
        tableItem.appendChild(userStatus)

        const stat = document.createElement('p')
        stat.textContent = userItem.status

        if (userItem.status === 'Verified') {
          console.log('test')
          userStatus.classList.add('accepted')
        } else if (userItem.status === 'Rejected') {
          userStatus.classList.add('rejected')
        } else if (userItem.status === 'Pending') {
          userStatus.classList.add('pending')
        }

        userStatus.appendChild(stat)

        const userActions = document.createElement('td')
        tableItem.appendChild(userActions)

        const actions = document.createElement('actions-component')
        userActions.appendChild(actions)
      })
  }
}

customElements.define('table-component', Table)
