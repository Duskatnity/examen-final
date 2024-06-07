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
        "telephone": "+1 (731) 342-9783",
        "age": 39,
        "country": "Canada",
        "status": "Rejected"
      },
      {
        "id": 2,
        "name": "Phoebe Venturi",
        "telephone": "+1 (887) 744-6950",
        "age": 52,
        "country": "Thailand",
        "status": "Verified"
      },
      {
        "id": 3,
        "name": "Caroline Pandolfi",
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

        th {
          background-color: hsla(100, 0%, 93%, 1);
          border: 1px solid #dddddd;
          text-align: left;
          padding: 1rem;
        }

        td {
          border: 1px solid #dddddd;
          text-align: left;
          padding: 1rem;
        }

        .accepted {
          text-align: center;
          padding: 0px;
          color: green;
          background-color: lightgreen;
          border-radius: 1rem;
        }

        .rejected {
          text-align: center;
          padding: 0;
          color: red;
          background-color: pink;
          border-radius: 1rem;
        }

        .pending {
          text-align: center;
          padding: 0;
          color: blue;
          background-color: lightblue;
          border-radius: 1rem;
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

        const userName = document.createElement('td')
        userName.textContent = userItem.name
        tableItem.appendChild(userName)

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
        userStatus.textContent = userItem.status

        if (userItem.status === 'Verified') {
          userStatus.classList.add('accepted')
        } else if (userItem.status === 'Rejected') {
          userStatus.classList.add('rejected')
        } else if (userItem.status === 'Pending') {
          userStatus.classList.add('pending')
        }
        tableItem.appendChild(userStatus)

        const userActions = document.createElement('td')
        tableItem.appendChild(userActions)

        const actions = document.createElement('actions-component')
        userActions.appendChild(actions)
      })
  }
}

customElements.define('table-component', Table)
