import React, { useState, useEffect } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { v4 as uuidV4 } from "uuid";

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;

  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const filtredData = cryptosList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCryptos(filtredData);
  }, [cryptosList, searchTerm]);

  if (isFetching) return <div className="loading">Loading ...</div>;
  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <Input
            type="text"
            placeholder="Search ..."
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}

      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((currency) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={uuidV4()}>
            <Link to={`/crypto/${currency.uuid}`}>
              <Card
                extra={<img src={currency.iconUrl} className="crypto-image" />}
                title={`${currency.rank}. ${currency.name}`}
                hoverable
              >
                <p>Price: {millify(currency.price)} </p>
                <p>Market Cap: {millify(currency.marketCap)} </p>
                <p>Daily Change: {millify(currency.change)}% </p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Cryptocurrencies;
