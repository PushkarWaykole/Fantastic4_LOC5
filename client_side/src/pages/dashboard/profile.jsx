import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Avatar,
  Typography,
  Tabs,
  TabsHeader,
  Tab,
  Switch,
  Tooltip,
  Button,
} from "@material-tailwind/react";
import { useState, useEffect } from "react";
import {
  HomeIcon,
  ChatBubbleLeftEllipsisIcon,
  Cog6ToothIcon,
  PencilIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { ProfileInfoCard, MessageCard } from "@/widgets/cards";
import { platformSettingsData, conversationsData, projectsData } from "@/data";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Box from "@mui/material/Box";
// import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import voucher_codes from "voucher-code-generator";

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(12px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#177ddc" : "#1890ff",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,.35)"
        : "rgba(,0,0,.25)",
    boxSizing: "border-box",
  },
}));

export function Profile() {
  const [users, setUsers] = useState([
    {
      _id: "6401a6439b10b092ac2cb957",
      name: "jj",
      email: "we@gmail.com",
      password: "$2b$10$gMOcygY.Qp9gs.98ReC/ZuhkMH3KBcxHXCW3wAzTMbsCORn/Zt2na",
      __v: 0,
    },
    {
      _id: "64022cc8aca3f5a2323550fb",
      name: "Pushkar",
      email: "rr@gmail",
      password: "$2b$10$Tsz0w7yqEJ3H5grq8gYAMOsSpcyFgEV3sgQzEkSkQcn6P8hEqHZwa",
      __v: 0,
    },
    {
      _id: "64022cf8aca3f5a2323550fe",
      name: "test1",
      email: "hi",
      password: "$2b$10$Df3fUXbvgNzQ7WwmFK52SOPwFyeLryIy.EiECYyCKsX1I1Odl/Yhm",
      __v: 0,
    },
    {
      _id: "64022d56aca3f5a232355101",
      name: "asdasd",
      email: "das",
      password: "$2b$10$AJEY8mdxFzUHVTFR.apId.nJvZHBPtbeALQGHcCTMDhZMzuGng1UO",
      __v: 0,
    },
    {
      _id: "6402c248db4f33f1ec9f9ec9",
      name: "umang",
      email: "umang@gmail.com",
      password: "$2b$10$E/0zCiyCKnByWByTg.NI1unXF1fOJ8GbkylhXasTuYCGlLch1pQ.a",
      __v: 0,
    },
    {
      _id: "640c128180664201439b9541",
      name: "Shyam",
      email: "shyam@gmail.com",
      password: "$2b$10$ag4gSJd1Wkab2aSBInEiP.Mg/RFeWjoiRHyOKjv.4Gu7JMU3EGTLG",
      __v: 0,
    },
    {
      _id: "640caed2e9f8e92d9a6594de",
      name: "Pushkar",
      email: "ejjhsdf",
      password: "pls man",
      __v: 0,
    },
    {
      _id: "640cb044cc88e906fe6a8858",
      name: "Pushksdfsfdsfdsar",
      email: "ejjhsddfsfsdfsf",
      password: "pls sdfsdfman",
      __v: 0,
    },
    {
      _id: "640cb07a910ecc1391175e94",
      name: "Pushksdfsfdsfdsar",
      email: "ejjhsddfsfsassdfsf",
      password: "pls sdfsdfman",
      __v: 0,
    },
    {
      _id: "640cb93d910ecc1391175e97",
      name: "Pushksdfsfdsfdsar",
      email: "ejjhsddfsfsassdfsdfsdsf",
      password: "pls sdfsdfmsdfsdan",
      __v: 0,
    },
    {
      _id: "640cc803d53241c74f4f7f50",
      name: "hoiuopjjkb5435",
      email: "gtkjhe5345",
      password: "pls sdfsdfmsdfsdan",
      __v: 0,
    },
    {
      _id: "640ccc1b4b1e515b43efd535",
      name: "shyam35565",
      email: "gtkjhe534dsf5",
      password: "pls sdfsdfmsdfsdan",
      __v: 0,
    },
  ]);

  const fetchUserData = () => {
    fetch("http://localhost:4000/getAllusers")
      .then((response) => {
        console.log("response: " + response);
        return response.json();
      })
      .then((data) => {
        console.log("data is: " + data);
        return data ? setUsers(data) : "re";
      });
  };

  // useEffect(() => {
  //   fetchUserData();
  // },[])
  // var voucher_codes = require('voucher-code-generator');

  const [numberCoupons, setNumberCoupons] = useState(0);
  const [product, setProduct] = useState("");
  const [discount, setDiscount] = useState(0);
  const [duration, setDuration] = useState(0);
  const [lengthCoupons, setLengthCoupons] = useState(0);
  const [prefix, setPrefix] = useState("");
  const [coupons, setCoupons] = useState([]);
  const incart = {
    incart: ["bread", "mousepad", "salt"],
  };

  const createCoupons = () => {
    const dummy = voucher_codes.generate({
      prefix: prefix,
      length: lengthCoupons,
      count: numberCoupons,
    });
    setCoupons(dummy);
    const new_coupons={name:"Pushkar23",email:"emadasdilsisddsd",password:"passs",coupons:["ME","yogesh","shyam","dhruvi"]};

    fetch("http://127.0.0.1:4000/addcoupons", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(new_coupons),
    }).then(() => {
      console.log("the new coupons generated are: " + new_coupons);
    });
  };

  return (
    <>
      <div
        className="relative mt-8 h-72 w-full overflow-hidden rounded-xl bg-[#eaeaea] bg-cover bg-center "
        style={{
          textAlign: "center",
          fontSize: "140px",
          color: "green",
          font: "bold",
        }}
      >
        REDEMPTION
        <div className="absolute inset-0 h-full w-full " />
      </div>
      <Card
        className="mx-3 -mt-16 mb-6 lg:mx-4"
        style={{
          background:
            "linear-gradient(to bottom left,#309900 24%, #217a09, #145d0b, #0b4009, #082600)",
        }}
      >
        <CardBody className="p-4">
          <div className="mb-10 flex items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <div>
                <Typography variant="h1" color="white" className="mb-1">
                  Generate Coupons
                </Typography>
                <Typography
                  variant="small"
                  className="font-normal text-white"
                ></Typography>
              </div>
            </div>
            <div className="w-96">
              <Tabs value="app">
                <TabsHeader>
                  <Tab value="app">
                    <HomeIcon className="-mt-1 mr-2 inline-block h-5 w-5" />
                    App
                  </Tab>
                  <Tab value="message">
                    <ChatBubbleLeftEllipsisIcon className="-mt-0.5 mr-2 inline-block h-5 w-5" />
                    Message
                  </Tab>
                  <Tab value="settings">
                    <Cog6ToothIcon className="-mt-1 mr-2 inline-block h-5 w-5" />
                    Settings
                  </Tab>
                </TabsHeader>
              </Tabs>
            </div>
          </div>
          <div className="gird-cols-1 mb-12 grid gap-12 px-4 lg:grid-cols-2 xl:grid-cols-3">
            <div>
              <Stack direction="row" spacing={0.7} className="">
                <Typography color="white">
                  <Box sx={{ fontWeight: "bold", m: 1, fontSize: 16 }}>
                    Dynamic Coupon
                  </Box>
                </Typography>
                <AntSwitch
                  defaultChecked
                  inputProps={{ "aria-label": "ant design" }}
                />
                <Typography color="white" component="div">
                  <Box
                    sx={{
                      fontWeight: "bold",
                      m: 1,
                      fontSize: 16,
                    }}
                  >
                    Static Coupon
                  </Box>
                </Typography>
              </Stack>
              <div className="mb-4">
                <Typography variant="h6" color="white" className="mb-1">
                  Enter Number of Coupons
                </Typography>
                <TextField
                  sx={{ input: { color: "white" } }}
                  id="outlined-basic"
                  label="e.g. 100"
                  variant="outlined"
                  color="primary"
                  onChange={(e) => setNumberCoupons(e.target.value)}
                  value={numberCoupons}
                />
              </div>
              <div className="mb-4">
                <Typography variant="h6" color="white" className="mb-1">
                  Enter Product Name
                </Typography>
                <TextField
                  sx={{ input: { color: "white" } }}
                  id="outlined-basic"
                  label="e.g. Keyboard"
                  variant="outlined"
                  onChange={(e) => setProduct(e.target.value)}
                  value={product}
                />
              </div>
              <div className="mb-4">
                <Typography variant="h6" color="white" className="mb-1">
                  Enter % Discount
                </Typography>
                <TextField
                  sx={{ input: { color: "white" } }}
                  id="outlined-basic"
                  label="e.g. 10%"
                  variant="outlined"
                  onChange={(e) => setDiscount(e.target.value)}
                  value={discount}
                />
              </div>
              <div className="mb-4">
                <Typography variant="h6" color="white" className="mb-1">
                  Enter Duration
                </Typography>
                <TextField
                  sx={{ input: { color: "white" } }}
                  id="outlined-basic"
                  label="e.g. 30 days"
                  variant="outlined"
                  onChange={(e) => setDuration(e.target.value)}
                  value={duration}
                />
              </div>
              <div className="mb-4">
                <Typography variant="h6" color="white" className="mb-1">
                  Length of Coupon
                </Typography>
                <TextField
                  sx={{ input: { color: "white" } }}
                  id="outlined-basic"
                  label="e.g. 30 days"
                  variant="outlined"
                  onChange={(e) => setLengthCoupons(e.target.value)}
                  value={lengthCoupons}
                />
              </div>
              <div className="mb-4">
                <Typography variant="h6" color="white" className="mb-1">
                  Prefix of coupons
                </Typography>
                <TextField
                  sx={{ input: { color: "white" } }}
                  id="outlined-basic"
                  label="e.g. 30 days"
                  variant="outlined"
                  onChange={(e) => setPrefix(e.target.value)}
                  value={prefix}
                />
              </div>

              <Button variant="contained" onClick={createCoupons}>
                Generate
              </Button>

              <div className="mb-4"></div>
              <div className="flex flex-col gap-12">
                {platformSettingsData.map(({ title, options }) => (
                  <div key={title}>
                    {/* <Typography className="mb-4 block text-xs font-semibold uppercase text-white">
                      {title}
                    </Typography> */}
                    {/* <div className="flex flex-col gap-6">
                      {options.map(({ checked, label }) => (
                        <Switch
                          key={label}
                          id={label}
                          label={label}
                          defaultChecked={checked}
                          labelProps={{
                            className: "text-sm font-normal text-white",
                          }}
                        />
                      ))}
                    </div> */}
                  </div>
                ))}
              </div>
            </div>
            <ProfileInfoCard
              className="text-white"
              title="Profile Information"
              description="CyberEon is an up-and-coming electronics manufacturer, dedicated to providing innovative and high-quality products with a focus on customer satisfaction. With over 10 years of experience in the field, we are well-equipped to offer an extensive range of cutting-edge and reliable products for both domestic and commercial use. Our commitment to quality, service and customer satisfaction has earned us a reputation as one of the leading electronics manufacturers in the industry today. We are proud to offer a wide selection of products that are designed to meet the highest standards of performance and safety. Whether you are looking for home entertainment systems, gaming consoles, or home automation solutions, CyberEon has the right product for you."
              details={{
                "first name": "CyberEon",
                mobile: "(44) 123 1234 123",
                email: "CyberEon@mail.com",
                location: "INDIA",
                social: (
                  <div className="flex items-center gap-4">
                    <i className="fa-brands fa-facebook text-white" />
                    <i className="fa-brands fa-twitter text-white" />
                    <i className="fa-brands fa-instagram text-white" />
                  </div>
                ),
              }}
              action={
                <Tooltip content="Edit Profile">
                  <PencilIcon className="h-4 w-4 cursor-pointer text-white" />
                </Tooltip>
              }
            />
            <div>
              <Typography variant="h6" color="white" className="mb-3">
                Customer Feedback
              </Typography>
              <ul className="flex flex-col gap-6">
                {conversationsData.map((props) => (
                  <MessageCard
                    key={props.name}
                    {...props}
                    action={
                      <Button variant="text" size="sm">
                        reply
                      </Button>
                    }
                  />
                ))}
              </ul>
            </div>
          </div>

          <div className="m-4 rounded-lg bg-white p-4">
            {coupons &&
              coupons.map((cc) => (
                <div className="text-black" key={cc}>
                  {cc}
                </div>
              ))}

            {/* {users.map((user)=>(
                  <div key={user.id} className="font-bold">User name: {user.name}</div>
                ))} */}
          </div>

          <div className="px-4 pb-4">
            <Typography variant="h4" color="white" className="mb-2">
              Coupon Recommendations
            </Typography>
            <Typography
              variant="small"
              className="font-normal text-white"
            ></Typography>
            <div className="mt-6 grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-4">
              {projectsData.map(
                ({ img, title, description, tag, route, members }) => (
                  <Card key={title} color="transparent" shadow={false}>
                    <CardHeader
                      floated={false}
                      color="gray"
                      className="mx-0 mt-0 mb-4 h-64 xl:h-40"
                    >
                      <img
                        src={img}
                        alt={title}
                        className="h-full w-full object-cover"
                      />
                    </CardHeader>
                    <CardBody className="py-0 px-1">
                      <Typography
                        variant="small"
                        className="font-normal text-white"
                      >
                        {tag}
                      </Typography>
                      <Typography
                        variant="h5"
                        color="white"
                        className="mt-1 mb-2"
                      >
                        {title}
                      </Typography>
                      <Typography
                        variant="small"
                        className="font-normal text-white"
                      >
                        {description}
                      </Typography>
                    </CardBody>
                    <CardFooter className="mt-6 flex items-center justify-between py-0 px-1">
                      <Link to={route}>
                        <Button variant="outlined" size="sm">
                          view Coupon
                        </Button>
                      </Link>
                      <div>
                        {members.map(({ img, name }, key) => (
                          <Tooltip key={name} content={name}>
                            <Avatar
                              src={img}
                              alt={name}
                              size="xs"
                              variant="circular"
                              className={`cursor-pointer border-2 border-white ${
                                key === 0 ? "" : "-ml-2.5"
                              }`}
                            />
                          </Tooltip>
                        ))}
                      </div>
                    </CardFooter>
                  </Card>
                )
              )}
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
}

export default Profile;
