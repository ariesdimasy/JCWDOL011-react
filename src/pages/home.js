import {
  Heading,
  Checkbox,
  Button,
  IconButton,
  Input,
  Text,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import style from "./home.module.css";
import { useState } from "react";

export default function Home() {
  const [todo, setTodo] = useState("");

  const [todos, setTodos] = useState([
    "Create Guest Experience mobile check-in",
    "Document current CI/CD process",
    "Perform Code Review for Pillow-Talk release",
  ]);

  return (
    <div className={style.main}>
      <div className={style.todolist}>
        <Heading
          as="h3"
          style={{ textAlign: "center", marginBottom: 20 }}
          color={"white"}
        >
          Chores Todo List
        </Heading>
        <ul>
          {todos.map((item, index) => (
            <li>
              <Checkbox colorScheme="#6f9d8c" borderColor={"#6f9d8c"}>
                {item}
              </Checkbox>

              <IconButton
                variant={"outline"}
                colorScheme="red"
                icon={<DeleteIcon />}
              ></IconButton>
            </li>
          ))}
        </ul>
      </div>
      <hr color={"white"}></hr>
      <div className={style.form}>
        <Heading
          style={{ textAlign: "center", margin: "30px 0" }}
          color={"white"}
          as="h5"
        >
          Done 0
        </Heading>
        <Text color={"white"} mb="8px">
          Add Todo:{" "}
        </Text>
        <Input
          color={"white"}
          style={{ marginBottom: 20 }}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
          value={todo}
        />
        <Button
          bgColor={"blue.200"}
          onClick={() => {
            const newArray = [...todos, todo];
            setTodos(newArray);
            setTodo("");
          }}
        >
          Add Task
        </Button>
      </div>
    </div>
  );
}
