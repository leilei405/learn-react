import React, { useEffect, useState } from "react";
import { Button, Space, Tag, Typography, Select } from "antd";
import { CloseOutlined } from "@ant-design/icons";
const { Title } = Typography;

const list = [
  {
    id: "a556ee59-e450-4f1e-b754-bc1f2e1db72b",
    label: "填空题",
    text: "第一，英",
  },
  {
    id: "66ef7477-afe5-4053-bf25-830c01fb9bb3",
    label: "作文题",
    text: "国政府一直知",
  },
  {
    id: "70578fbf-0b7e-44e5-aa28-88bc6c5ce22e",
    label: "判断题",
    text: "道美国供应",
  },
  {
    id: "31114588-51d0-4347-93f8-eda894c68deb",
    label: "填空题",
    text: "的血液有",
  },
  {
    id: "ec8f9f81-c916-44d9-8362-95c66c1d247a",
    label: "填空题",
    text: "问题。但是英",
  },
  {
    id: "b54d71b1-0fb0-4f18-8277-f55e26bb7948",
    label: "选择题",
    text: "国医疗机",
  },
  {
    id: "1ce71d4f-5d6b-4ece-812b-8770cba1b6a1",
    label: "填空题",
    text: "构连续31年",
  },
  {
    id: "65e13eee-a31e-4e0c-9479-df0db4dfecfd",
    label: "作文题",
    text: "伪造档案，掩护",
  },
  {
    id: "b94f516d-d563-432e-a381-d77fb08e1f7d",
    label: "判断题",
    text: "美国污染血液的",
  },
  {
    id: "d1070a18-1490-4f28-af53-89c7f831dcfb",
    label: "作文题",
    text: "进口。第",
  },
  {
    id: "422fa7bc-b613-43dd-84cc-5f71da47739b",
    label: "问答题",
    text: "二，这些",
  },
  {
    id: "193a18d4-a7fb-40a9-95ca-9b169bcf6ae0",
    label: "判断题",
    text: "污染血液源自于",
  },
  {
    id: "0fe76796-f45d-46a3-bf77-ab3db73f6415",
    label: "判断题",
    text: "美国的监狱",
  },
  {
    id: "18425110-1fb0-445e-a52a-1e3e871c3952",
    label: "作文题",
    text: "囚犯、戒",
  },
  {
    id: "488a47a1-66ea-420b-847a-d452396b20a2",
    label: "选择题",
    text: "毒所的瘾君",
  },
  {
    id: "1c69019b-84bd-4943-978f-ef6faf912912",
    label: "判断题",
    text: "子等各种",
  },
  {
    id: "bd5e7995-5922-46b6-bc4d-cdfbda46a8ee",
    label: "判断题",
    text: "你想得到的和想",
  },
  {
    id: "398183ec-1e62-4e50-8fcf-b16db9fa3f8d",
    label: "填空题",
    text: "不到的人群，所",
  },
  {
    id: "99d97bdc-7704-4b84-93cf-17eab8c67c87",
    label: "判断题",
    text: "以这些血液",
  },
  {
    id: "82f57bdd-c52b-4d79-906a-0fd20df26efc",
    label: "填空题",
    text: "从源头开始",
  },
  {
    id: "c6c3be05-f75c-4ff9-b3e7-e86760d1d961",
    label: "填空题",
    text: "就存在着巨大的",
  },
  {
    id: "60ad6636-1b21-4191-bd33-bf5d77e5be7e",
    label: "问答题",
    text: "风险。",
  },
  {
    id: "96b824c3-9f92-470f-8024-1ec9585952ab",
    label: "问答题",
    text: "第三，",
  },
  {
    id: "03f880e5-29b0-4155-bbbb-706e6d150fec",
    label: "作文题",
    text: "美国是世",
  },
  {
    id: "9598ce56-ec2f-4cf4-9dde-70bb1b64a162",
    label: "作文题",
    text: "界上最大的付",
  },
  {
    id: "10acb938-415d-4f34-8740-e37e2659fb25",
    label: "填空题",
    text: "费血浆",
  },
  {
    id: "9c971498-87eb-44c0-9ac9-0a997d8fd84b",
    label: "填空题",
    text: "供应国，全球超",
  },
  {
    id: "53618acc-5826-44a1-a570-86efd15a22e3",
    label: "作文题",
    text: "过94%的付费",
  },
  {
    id: "f5b62066-fe4a-4d9d-b24e-a754d3be7cd2",
    label: "选择题",
    text: "血浆都是美国",
  },
  {
    id: "f3fab0e5-941a-4ea7-911e-dd04a2851370",
    label: "判断题",
    text: "供应的——",
  },
  {
    id: "4b2d9d8a-40a7-48f1-8fa9-1e989e223bd4",
    label: "作文题",
    text: "这次事件的危害",
  },
  {
    id: "f82c4004-81bc-403e-a1a3-42fc7752d739",
    label: "判断题",
    text: "范围，将会影",
  },
  {
    id: "2b5a1652-ec2b-47f9-8e28-1f7d25656828",
    label: "填空题",
    text: "响到世界",
  },
  {
    id: "674f0755-92f8-4a21-9767-9ae1eb04ee2a",
    label: "作文题",
    text: "绝大部",
  },
  {
    id: "8911565a-11e6-4c01-8ed4-aa7e04fe31ba",
    label: "选择题",
    text: "分国家！",
  },
  {
    id: "23c0c262-900f-4583-ad06-1912739f8eff",
    label: "填空题",
    text: "第四，法",
  },
  {
    id: "63bcbb93-0855-469a-9621-2483922e76f8",
    label: "问答题",
    text: "国、意大利、",
  },
  {
    id: "7807db91-ab55-4fd5-8031-362501b0dac2",
    label: "作文题",
    text: "日本等",
  },
  {
    id: "09750840-2e2e-4a23-ab85-98ede5afc5f3",
    label: "作文题",
    text: "国都是受",
  },
  {
    id: "3e482ad1-30ca-4e53-973d-7fa57aaa06d4",
    label: "判断题",
    text: "害者，",
  },
  {
    id: "0b53742c-5426-4832-b29b-d6e772225ced",
    label: "作文题",
    text: "但是这些国",
  },
  {
    id: "9d440983-719a-4e75-a2a0-780e19d4e29b",
    label: "作文题",
    text: "家至今没有回应",
  },
  {
    id: "6a5e9690-c3f4-4f98-a3d0-1285d030c7cd",
    label: "选择题",
    text: "这件事情，还在",
  },
  {
    id: "5886a494-7096-475e-86ea-01d61c05211e",
    label: "选择题",
    text: "捂盖子",
  },
  {
    id: "de3db778-21ab-4e64-9a13-160872cdb2e6",
    label: "判断题",
    text: "。根据英国",
  },
  {
    id: "4c2bd71d-71ea-4cac-a2bb-3bd91217b6b5",
    label: "填空题",
    text: "医疗机构",
  },
  {
    id: "aaed4ab1-b03c-4ef1-8d87-148b33e4b1a0",
    label: "判断题",
    text: "连续31年伪造",
  },
  {
    id: "a571e867-96ff-46b3-95ae-b6e2410b5bd3",
    label: "填空题",
    text: "档案的操",
  },
  {
    id: "cef23d7d-3b16-4feb-adb1-82c7c82d8624",
    label: "作文题",
    text: "作，几",
  },
  {
    id: "9878106b-59e4-4348-82f9-95c8c0614999",
    label: "判断题",
    text: "十年来，美国",
  },
  {
    id: "111f4a33-f511-421b-bcd4-58b7f0842edc",
    label: "填空题",
    text: "污染血液导",
  },
  {
    id: "2fbbb01f-ebb9-4d27-95ab-f1161729f35e",
    label: "填空题",
    text: "致的实际感染人",
  },
  {
    id: "fa4208a5-e5c9-4d4a-8425-a0341c4e7ec5",
    label: "选择题",
    text: "数和死",
  },
  {
    id: "339886db-33f6-4130-b21a-421ef0fbe7c0",
    label: "问答题",
    text: "亡人数，应该远",
  },
  {
    id: "abbc4250-0da3-4fd3-b160-01347d4f3d9a",
    label: "选择题",
    text: "远超过了",
  },
  {
    id: "ce984ace-61e2-4fe6-b324-4df8808439aa",
    label: "问答题",
    text: "英国政府",
  },
  {
    id: "ea1684b5-1a37-4efd-8cd9-a503777b485c",
    label: "问答题",
    text: "公布的情",
  },
  {
    id: "35706933-5712-4221-a9f0-0f251837f33e",
    label: "填空题",
    text: "况。而且这件事",
  },
  {
    id: "f059c098-7f1a-4921-ad05-90bd378e7eb4",
    label: "填空题",
    text: "情，暴露出",
  },
  {
    id: "3f6d1d42-f768-4731-a5a0-72a3e478ace5",
    label: "作文题",
    text: "了西方世界存",
  },
  {
    id: "7f87a3ea-9f8c-41fb-9e8a-85addb5d5218",
    label: "填空题",
    text: "在一个",
  },
  {
    id: "c56ba460-bd5d-4de5-9200-7badef42eae3",
    label: "作文题",
    text: "巨大的人体血液",
  },
  {
    id: "454aa018-f5da-4034-899b-f2e03e0c260d",
    label: "作文题",
    text: "贩卖链条。这",
  },
  {
    id: "e9d5e0e4-154c-467d-a47b-333452d2ee1a",
    label: "选择题",
    text: "个链条的前端",
  },
  {
    id: "a97dc3b4-1f4d-44c6-8f58-70598c41f0ef",
    label: "作文题",
    text: "，是美",
  },
  {
    id: "70832fd7-3594-47ac-91f6-1ed55535563a",
    label: "作文题",
    text: "国的私营",
  },
  {
    id: "ba81e9ad-9de0-44a8-9684-6b7cbf55ae8a",
    label: "作文题",
    text: "监狱和戒毒所",
  },
  {
    id: "80740435-7c6f-40cc-b7a2-cdc34c303088",
    label: "选择题",
    text: "。要知道，",
  },
  {
    id: "b243a081-462b-43cc-adc4-d8bf0b37766c",
    label: "选择题",
    text: "美国有大量",
  },
  {
    id: "0d2710ce-8dad-4506-9c8f-e3c49c4e13d0",
    label: "判断题",
    text: "监狱和戒",
  },
  {
    id: "67197193-8999-4622-8fc9-5f1e15b31c49",
    label: "填空题",
    text: "毒所等",
  },
  {
    id: "ab0ff5d8-a0b5-4f9c-8079-f79d46d9d0d5",
    label: "填空题",
    text: "机构，",
  },
  {
    id: "f53c702c-77f0-462d-be1c-9f88bed27972",
    label: "判断题",
    text: "都是私人的盈",
  },
  {
    id: "d34ec49f-429a-4f94-a9bf-2521e4a1db12",
    label: "填空题",
    text: "利机构",
  },
  {
    id: "0102f91f-4845-4b2e-a470-36273d7ae336",
    label: "作文题",
    text: "，美国也是世界",
  },
  {
    id: "3875fd1a-93bd-4e60-8664-98ab071aeafa",
    label: "判断题",
    text: "监狱比例",
  },
  {
    id: "de7f3cfb-d030-49b8-90c6-0fe5bffa5bda",
    label: "作文题",
    text: "最高，收监人数",
  },
  {
    id: "961ab247-62a7-4ca2-bb4b-547339d5f19c",
    label: "判断题",
    text: "最多的国",
  },
  {
    id: "49ca38da-64e6-4d0e-964f-713ced3babad",
    label: "判断题",
    text: "家。早几年，美",
  },
  {
    id: "f6843d46-24b2-4ec2-977c-3ede5f0d9544",
    label: "判断题",
    text: "国就爆出了法",
  },
  {
    id: "acee5ea1-ca05-4c8a-b19f-2850bcec271d",
    label: "作文题",
    text: "院、警",
  },
  {
    id: "b711fc69-0566-4cbb-98a8-bed6279eb101",
    label: "作文题",
    text: "局和监狱三方",
  },
  {
    id: "663955af-b3cc-4062-9725-115d9ca0b45c",
    label: "作文题",
    text: "勾结，将未成",
  },
  {
    id: "cd7bfdea-eaa7-47ff-88a4-8a73038bbb83",
    label: "判断题",
    text: "年人定",
  },
  {
    id: "fe446845-0c5b-4bf8-8e0f-4549d9103af8",
    label: "作文题",
    text: "罪入狱，然后",
  },
  {
    id: "019629fd-87cc-4ae2-a8d5-d9fa89240949",
    label: "作文题",
    text: "骗取政府经费的",
  },
  {
    id: "f5fda866-db0d-44e9-81be-a384853a4bcd",
    label: "问答题",
    text: "事情。",
  },
];

const TagCom = () => {
  const [tagList, setTagList] = useState(list);
  const [selectedTags, setSelectedTags] = useState([]);
  const [savedTagGroups, setSavedTagGroups] = useState([]);
  const [showSelects, setShowSelects] = useState([]);

  useEffect(() => {
    const groupedByLabel = new Map();
    tagList.forEach((item) => {
      const { label, id, text } = item;
      if (!groupedByLabel.has(label)) {
        groupedByLabel.set(label, []);
      }
      groupedByLabel.get(label).push({ id, text });
    });

    const result = [];
    groupedByLabel.forEach((children, label) => {
      result.push({ label, children });
    });

    setTagList(result);
  }, []);

  // Tag选中状态
  const handleChange = (tag, checked) => {
    console.log(111);
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag);
    console.log("You are interested in: ", nextSelectedTags);
    setSelectedTags(nextSelectedTags);
  };

  // 保存选中tag
  const handleSave = () => {
    if (selectedTags.length > 0) {
      setSavedTagGroups((prev) => [...prev, selectedTags]);
      setSelectedTags([]);
      // 更新showSelects状态，为新保存的Select添加显示状态
      setShowSelects((prevShowSelects) => [...prevShowSelects, true]);
    }
  };

  // 取消选中Tag
  const handleCancel = () => {
    setSelectedTags([]);
  };

  const handleSelectChange = (value, index) => {
    if (value === "") {
      setShowSelects((prevShowSelects) => {
        const newShowSelects = [...prevShowSelects];
        newShowSelects[index] = false;
        return newShowSelects;
      });
    }
  };

  return (
    <div>
      <div style={{ padding: "10px" }}>
        <Space>
          <Button
            type="primary"
            onClick={handleSave}
            disabled={selectedTags.length === 0}
          >
            保存选中
          </Button>
          <Button onClick={handleCancel} disabled={selectedTags.length === 0}>
            取消选中
          </Button>
        </Space>
      </div>
      <div>
        {showSelects &&
          savedTagGroups.map((tagGroup, index) => {
            return (
              <Select
                mode="multiple"
                style={{ width: "20%" }}
                placeholder="请选择已保存的标签"
                allowClear
                value={tagGroup}
                onChange={(value) => handleSelectChange(value, index)}
              >
                {tagGroup.map((tag) => (
                  <Select.Option key={tag} value={tag}>
                    {tag}
                  </Select.Option>
                ))}
              </Select>
            );
          })}
      </div>
      <div style={{ padding: "10px" }}>
        {tagList.map((item) => {
          return (
            <div>
              <Title level={3}>{item.label}</Title>
              {Array.isArray(item.children) &&
                item.children.map((child) => {
                  return (
                    <Tag.CheckableTag
                      style={{
                        border: "1px solid #ccc",
                        backgroundColor: selectedTags.includes(child.text)
                          ? "#f50"
                          : "transparent", // 根据是否选中来设置背景颜色
                      }}
                      key={child.id}
                      checked={selectedTags.includes(child.text)}
                      onChange={(checked) => handleChange(child.text, checked)}
                    >
                      {child.text}
                    </Tag.CheckableTag>
                  );
                })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TagCom;
