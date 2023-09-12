import profileImage from '../../image/profile.jpg'

const DashBoard = () => {
  const data = [1, 2, 3, 4, 5, 6]
  return (
    <div className="p-4">
      {/* grid */}
      <div className="grid md:grid-cols-2  xl:grid-cols-4 gap-4">
        <div className="h-32 shadow-lg boder flex align-center justify-between p-4 rounded-lg ">
          <div className="">
            <h1 className="font-bold">Icome</h1>
            <h1 className="font-bold text-md lg:text:2xl">$ 3, 200, 000</h1>
            <p className="text-green-500 font-bold mt-2">+$2.545</p>
          </div>
          <div>
            <img
              src={profileImage}
              alt="image"
              className="w-24 h-24 object-cover rounded-full"
            />
          </div>
        </div>
        <div className="h-32 shadow-lg border flex align-center justify-between p-4 rounded-lg ">
          <div className="">
            <h1 className="font-bold">Icome</h1>
            <h1 className="font-bold text-md lg:text:2xl">$ 3, 200, 000</h1>
            <p className="text-green-500 font-bold mt-2">+$2.545</p>
          </div>
          <div>
            <img
              src={profileImage}
              alt="image"
              className="w-24 h-24 object-cover rounded-full"
            />
          </div>
        </div>
        <div className="h-32 shadow-lg border flex align-center justify-between p-4 rounded-lg ">
          <div className="">
            <h1 className="font-bold">Icome</h1>
            <h1 className="font-bold text-md lg:text:2xl">$ 3, 200, 000</h1>
            <p className="text-green-500 font-bold mt-2">+$2.545</p>
          </div>
          <div>
            <img
              src={profileImage}
              alt="image"
              className="w-24 h-24 object-cover rounded-full"
            />
          </div>
        </div>
        <div className="h-32 shadow-lg border flex align-center justify-between p-4 rounded-lg ">
          <div className="">
            <h1 className="font-bold">Icome</h1>
            <h1 className="font-bold text-md lg:text:2xl">$ 3, 200, 000</h1>
            <p className="text-green-500 font-bold mt-2">+$2.545</p>
          </div>
          <div>
            <img
              src={profileImage}
              alt="image"
              className="w-24 h-24 object-cover rounded-full"
            />
          </div>
        </div>
      </div>
      <div className="mt-4 border shadow-lg rounded-lg overflow-hidden p-4 pb-20">
        <h1 className="text-black font-bold lg:text-xl">All Transitions</h1>
        <div className="mt-4 md:flex gap-4">
          {/* table */}
          <div className="w-full md:w-[70%]">
            <div className="table w-full rounded-lg p-4 border">
              <div className="table-header-group">
                <div className="table-row">
                  <div className="table-cell text-left font-semibold lg:text-lg">
                    ID
                  </div>
                  <div className="table-cell text-left font-semibold lg:text-lg">
                    Customer
                  </div>
                  <div className="table-cell text-left font-semibold lg:text-lg">
                    Product
                  </div>
                  <div className="table-cell text-left font-semibold lg:text-lg">
                    Total
                  </div>
                </div>
              </div>

              {data.map((index) => (
                <div className="table-header-group">
                  <div className="table-row">
                    <div className="table-cell text-left text-slate-500 lg:text-lg">
                      {index}
                    </div>
                    <div className="table-cell text-left text-slate-500 lg:text-lg">
                      Puthsitha
                    </div>
                    <div className="table-cell text-left text-slate-500 lg:text-lg">
                      Cocacola
                    </div>
                    <div className="table-cell text-left text-slate-500 lg:text-lg">
                      $15
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* char */}
          <div className="w-full md:w-[30%] border rounded-lg p-4 mt-4 md:mt-0"></div>
        </div>
      </div>
    </div>
  )
}

export default DashBoard
