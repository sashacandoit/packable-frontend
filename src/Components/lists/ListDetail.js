import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import PackableApi from "../../PackableApi"
import LoadingSpinner from "../common/LoadingSpinner";
import "./ListDetail.css"
import "../styles/style.css"
import { Container, Row } from "reactstrap";
import ForcastList from "../forcast/ForcastList"
import ListItems from "./ListItems";
import moment from 'moment'


const ListDetail = () => {
  const { id } = useParams();

  const [list, setList] = useState([])
  const [forcast, setForcast] = useState([])
  
  const formatDate = (date) => {
    return moment(date).format('MMMM Do YYYY')
  }

  useEffect(function getListDetails() {
    async function getList() {
      let list = await PackableApi.getListDetails(id)
      setList(list);
    }
    getList();
  }, [id]);


  useEffect(function getListForcast() {
    async function getListForcast() {
      let forcastRes = await PackableApi.getForcast(id)
      setForcast(forcastRes);
    }
    getListForcast();
  }, [id]);


  if (!list ) return <LoadingSpinner />

  return (
    <Container className="ListDetail">
      <Row>
        <h2>
          {forcast.resolvedAddress}
        </h2>
        <h5 className="text-secondary">
          Traveling on: {formatDate(list.arrival_date)}
        </h5>
        <ForcastList formatDate={formatDate} days={forcast.days} />
      </Row>
      
      <Row>
          <ListItems />
      </Row>
    </Container>
  )
}

export default ListDetail;