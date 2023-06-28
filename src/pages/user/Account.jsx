import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUserAction, getAllUserAction, updateUserAction } from '../redux/actions/userActions'

const Account = () => {

  const [userData, setuserData] = useState({
    name: "",
    email: ""
  })
  let deleteId
  const dispatch = useDispatch()
  const { users, userDeleted, userUpdated } = useSelector(state => state.allUsers)

  useEffect(() => {
    dispatch(getAllUserAction())
  }, [userDeleted, userUpdated])

  const handleUser = () => {
    dispatch(deleteUserAction(deleteId))
  }

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: userData.name,
      email: userData.email
    },
    validationSchema: "",
    onSubmit: values => {
      console.log(values, userData.id);
      dispatch(updateUserAction({
        ...values,
        id: userData.id
      }))
    }
  })

  return (<>
    {/* <h3>{JSON.stringify(users)}</h3> */}
    {/* ctrl shift right     */}
    <div className="container">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>name</th>
            <th>email</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((item, i) => <tr key={item.id}>
              <th>{i + 1}</th>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>
                <button onClick={e => setuserData(item)} type="button" class="btn btn-warning mx-1" data-bs-toggle="modal" data-bs-target="#editModal">edit</button>
                <button type="button" class="btn btn-danger" onClick={e => deleteId = item.id} data-bs-toggle="modal" data-bs-target="#deleteModal" >delete</button>
              </td>
            </tr>)
          }
        </tbody>
      </table>

    </div>

    <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="deleteModal" >delete user</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h1>are you sure you want to delete</h1>
            <button type="button" class="btn btn-secondary mx-1" onClick={handleUser} data-bs-dismiss="modal">yes</button>
            <button type="button" class="btn btn-success" data-bs-dismiss="modal">no</button>
          </div>

        </div>
      </div>
    </div>
    {/* edit modal */}
    <div class="modal fade" id="editModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="editModal">Edit User</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            {JSON.stringify(userData)}
            <div class="container">
              <div class="row">
                <div class="col-sm-6 offset-sm-3">
                  <div class="card">
                    <div class="card-header">Update Users</div>
                    <form onSubmit={formik.handleSubmit}>
                      <div class="card-body">
                        <div>
                          <label for="name" class="form-label">First name</label>
                          <input
                            type="text"
                            name="name"
                            value={formik
                              .values.name}
                            onChange={formik.handleChange}
                            class="form-control"
                            id="name"
                            placeholder="Enter your name"
                          />
                          <div class="valid-feedback">Looks good!</div>
                          <div class="invalid-feedback">Please choose a username.</div>
                        </div>
                        <div class="mt-2">
                          <label for="email" class="form-label">First Email</label>
                          <input
                            type="text"
                            name="email"
                            value={formik
                              .values.email}
                            onChange={formik.handleChange}
                            class="form-control"
                            id="email"
                            placeholder="Enter Your Email"
                          />
                          <div class="valid-feedback">Looks good!</div>
                          <div class="invalid-feedback">Please choose a username.</div>
                        </div>
                        {/* <div class="mt-2">
                        <label for="password" class="form-label">Password</label>
                        <input
                          type="text"
                          class="form-control"
                          id="password"
                          placeholder="Enter Your Password"
                        />
                        <div class="valid-feedback">Looks good!</div>
                        <div class="invalid-feedback">Please choose a password.</div>
                      </div> */}
                        {/* <div class="mt-2">
                        <label for="cpassword" class="form-label"
                        >Confirm Password</label
                        >
                        <input
                          type="text"
                          class="form-control"
                          id="cpassword"
                          placeholder="Confirm Your Password"
                        />
                        <div class="valid-feedback">Looks good!</div>
                        <div class="invalid-feedback">
                          Please Recheck Your Password.
                        </div>
                      </div> */}
                        <button type="submit" class="btn btn-primary w-100 mt-3" data-bs-dismiss="modal">
                          update user
                        </button>

                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>




  </>
  )
}

export default Account
