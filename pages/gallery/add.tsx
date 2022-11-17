import { NextPage } from "next";
import { useEffect, useState } from "react";
import { ItemMini } from "../../src/interfaces/item";
import { LangListScore } from "../../src/interfaces/LangList";
import { api } from "../../src/utils/api";
import GalleryAdd from "../../src/views/gallery/add";

const Add: NextPage = () => {
  const [pupUpAdd, setPupUpAdd] = useState<boolean>(false);
  const [langList, setLangList] = useState<Array<LangListScore>>([]);

  const [lang, setLang] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [itens, setItens] = useState<Array<ItemMini>>([]);

  useEffect(() => {
    api.get("/lang").then((res) => {
      setLangList(
        res.data.map((item: string) => ({ value: item, text: item }))
      );
    });
  }, []);

  function ChangePupUp() {
    setPupUpAdd(!pupUpAdd);
  }

  function FormSubmit(e: any) {
    e.preventDefault();
    const data = {
      name,
      lang,
      image,
    };

    console.log(data);
  }

  return (
    <GalleryAdd
      functions={{
        ChangePupUp,
        FormSubmit,
      }}
      inputs={{
        image,
        itens,
        lang,
        name,
        setImage,
        setItens,
        setLang,
        setName,
      }}
      langList={langList}
      pupUpAdd={pupUpAdd}
      setLangList={setLangList}
      setPupUpAdd={setPupUpAdd}
    />
  );
};

export default Add;
